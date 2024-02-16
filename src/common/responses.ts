import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
interface  Response {
  success: (message: any, data?: any) => Response;
  no_data_success: (message: any, data?: any) => Response;
  error: (code: any, message: any, data?: any) => Response;
  custom: (code: any, message: any, data?: any) => void;
}
}
const customResponseMiddleware =  (req: Request, res: Response, next: NextFunction) => {
  // success response
  res.success = (message: any, data?: any) => {
    message = prettyCase(message);
    return res.status(200).send({ statusCode: 200, message, data: data || {} });
  };

  // No data success response
  res.no_data_success = (message: any, data?: any) => {
    message = prettyCase(message);
    return res.status(201).send({ statusCode: 201, message, data: data || {} });
  };

  // error response
  res.error = (code: any, message: any, data?: any) => {
    message = prettyCase(message);
    return res.status(code).send({ statusCode: code, message, data: data || {} });
  };

  // custom response
  res.custom = (code: any, message: any, data?: any) => {
    message = prettyCase(message);
    // Add your custom response logic here
    // You might want to send a response or do something else
  };

  // proceed forward
  next();
};

function prettyCase(message: any): any {
  // Implement your prettyCase logic here
  return message;
}

export {customResponseMiddleware};