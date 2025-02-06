import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({ 
    headers: req.headers.set('Content-Type', 'application/json').set('Accept', '*/*').set('Authorization', 'Bearer '+ sessionStorage.getItem('token')) 
  });   
  return next(modifiedReq);
};
