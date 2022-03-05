export interface ActionListItemModel {
  name: string;
  action: (actionListItem: ActionListItemModel) => void;
  matIcon: string;
}
