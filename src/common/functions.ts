import _ from "lodash";


interface CustomModule {
    toHex: (val: string) => string;
    toStr: (val: string) => string;
    prettyCase: (str: string) => string;
  }
  
  const customModule: CustomModule = {
    toHex: (val: string) => Buffer.from(val, 'utf8').toString('hex'),
    toStr: (val: string) => Buffer.from(val, 'hex').toString('utf8'),
    prettyCase: (str: string) => {
      if (typeof str === 'string' && /^[A-Z_]+$/.test(str)) {
        str = _.lowerCase(str);
        str = _.startCase(str);
      }
      return str;
    },
  };
  
  export default customModule;