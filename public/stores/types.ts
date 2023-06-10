export interface IState {
  showData: Array<{
    id: number;
    title: string;
    devices: number;
    active: boolean;
    srcPic: string;
    color: string;
  }>;
  notif: boolean;
}
export type ContextType = {
  store: IState;
  setStore: (name: string, e: any) => void;
};
