import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const authService =  inject(AuthService);/* Obtenha a instância do AuthService */
  const router = inject(Router);/* Obtenha a instância do Router */

  if (!authService.estaAutenticado()) {
    return authService.login('email', 'password') ? true : router.createUrlTree(['/login']);
  }

  return true;
};
