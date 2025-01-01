import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if(!sessionStorage.getItem('token')) {
    router.navigateByUrl('login');
    return false;
  }
  return true;
};
