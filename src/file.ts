import { FormatType, IFileInfo } from '../types/file'



export const getFileFormatInfo = (file: IFileInfo, formatType: FormatType): string => {
  switch (formatType) {
    case FormatType.Simplicity:
      return `${file.name}/${file.path}`;
    case FormatType.Complete:

      return `${file.name}/${file.path}/${file.createTime}/${file.author}/${file.size}`
    default:
      return ""
  }
}


export default getFileFormatInfo;
