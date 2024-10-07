import { type IMessage } from "~/interfaces/IMessages";

export const useIsChatting = () => useState("isChatting", () => false);
export const useMessages = () => useState<IMessage[]>("messages", () => []);
