import {FormatType,IFileInfo} from '../types/file'
import {getFileFormatInfo} from '../src/file'


describe('works', () => {

  const file:IFileInfo={
    name:'测试文档.doc',
    path:'d:/docs/',
    createTime:1653278973,
    author:'admin',
    size:310202
  }

  it('转换成简要类型', () => {
    expect(getFileFormatInfo(file,FormatType.Simplicity)).toBe(`测试文档.doc/d:/docs/`);
  });

  it('转换成完整类型', () => {
    expect(getFileFormatInfo(file,FormatType.Complete)).toBe(`${file.name}/${file.path}`);
  });
});

