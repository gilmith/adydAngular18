import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '../../services/spinnerService/spinner.service';
import { delay, finalize } from 'rxjs';


export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService = inject(SpinnerService);
  spinnerService.show()
  return next(req).pipe(
    delay(200),
    finalize(() => spinnerService.hide())
  );
};
