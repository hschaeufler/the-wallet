import * as zip from '@zip.js/zip.js';
import { PassData } from '@pkpass/types';
import { PkpassWrapperModel } from '../PkpassWrapper.model';
import { PassTypeEnum } from '../PassType.enum';
import { PassStructure } from '@pkpass/types/src/low-level/structure';
import { ManifestModel } from '../Manifest.model';

export const passDataToPassStructure = (
  passData: PassData
): [PassTypeEnum, PassStructure] => {
  if ('boardingPass' in passData) {
    return [PassTypeEnum.BOARDINGPASS, passData.boardingPass];
  } else if ('coupon' in passData) {
    return [PassTypeEnum.BOARDINGPASS, passData.coupon];
  } else if ('eventTicket' in passData) {
    return [PassTypeEnum.BOARDINGPASS, passData.eventTicket];
  } else if ('generic' in passData) {
    return [PassTypeEnum.BOARDINGPASS, passData.generic];
  } else if ('storeCard' in passData) {
    return [PassTypeEnum.BOARDINGPASS, passData.storeCard];
  }
  throw new DOMException('No valid PassData found!');
};

export const getLogoName = (manifest: ManifestModel): string | undefined => {
  const manifestEntries = Object.entries(manifest);
  const logos = manifestEntries
    .filter((entry) => entry[0].startsWith('logo'))
    .map((entry) => entry[0])
    .sort();
  return logos.length > 0 ? logos[logos.length - 1] : undefined;
};

export const readPKPASS = async (file: File): Promise<PkpassWrapperModel> => {
  const reader = new zip.ZipReader(new zip.BlobReader(file));
  const entries = await reader.getEntries();

  const passJSONEntry = entries.find((entry) => entry.filename === 'pass.json');
  const manifestJSONEntry = entries.find(
    (entry) => entry.filename === 'manifest.json'
  );

  if (
    passJSONEntry &&
    passJSONEntry.getData &&
    manifestJSONEntry &&
    manifestJSONEntry.getData
  ) {
    const passText = await passJSONEntry.getData(new zip.TextWriter());
    const manifestText = await manifestJSONEntry.getData(new zip.TextWriter());

    const passData: PassData = JSON.parse(passText);
    const manifest: ManifestModel = JSON.parse(manifestText);

    const [passType, passStructure] = passDataToPassStructure(passData);

    const deprecatedBarcode = passData.barcode ? passData.barcode : undefined;
    const barcodeArrayElement =
      passData.barcodes && passData.barcodes.length > 0
        ? passData.barcodes[0]
        : undefined;
    const barcode = barcodeArrayElement
      ? barcodeArrayElement
      : deprecatedBarcode;

    let logo;
    const logoName = getLogoName(manifest);
    if (logoName) {
      const logoEntry = entries.find((entry) => entry.filename === logoName);
      logo =
        logoEntry && logoEntry.getData
          ? await logoEntry.getData(new zip.BlobWriter())
          : undefined;
    }

    const pkpassWrapper: PkpassWrapperModel = {
      file: file,
      passType: passType,
      passData: passData,
      passFields: passStructure,
      manifest: manifest,
      barcode: barcode,
      logo: logo,
    };

    return pkpassWrapper;
  } else {
    throw new DOMException('No valid Pkpass!');
  }
};
