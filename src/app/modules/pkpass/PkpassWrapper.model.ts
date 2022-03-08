import { PassData } from '@pkpass/types';
import { PassStructure } from '@pkpass/types/src/low-level/structure';
import { PassTypeEnum } from './PassType.enum';
import { ManifestModel } from './Manifest.model';
import { Barcode } from '@pkpass/types/src/low-level';

export interface PkpassWrapperModel {
  file: File;
  passType: PassTypeEnum;
  passData: PassData;
  passFields: PassStructure;
  manifest: ManifestModel;
  barcode?: Barcode;
  logo?: File;
}
