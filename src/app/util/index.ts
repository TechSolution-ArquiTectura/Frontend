export function isLogged(): boolean {
  return JSON.parse(localStorage.getItem('logged') ?? 'false');
}

export function getTypeUser(): string {
  if (localStorage.getItem('typeUser') == null) {
    return '';
  }
  return localStorage.getItem('typeUser') as string;
}

export function getUserId(): number | null {
  return JSON.parse(localStorage.getItem('userId') ?? '{}');
}

export function isCinephile(): boolean {
  return localStorage.getItem('typeUser') == 'cinephile';
}

export function isCeniphileOrAnonymous(): boolean {
  return (
    localStorage.getItem('typeUser') == 'cinephile' ||
    localStorage.getItem('typeUser') == null
  );
}

export function isBusiness(): boolean {
  return localStorage.getItem('typeUser') == 'business';
}

export function isBusinessOrAnonymous(): boolean {
  return (
    localStorage.getItem('typeUser') == 'business' ||
    localStorage.getItem('typeUser') == null
  );
}

export function getBusinessId(): number {
  return JSON.parse(localStorage.getItem('businessId') ?? '{}');
}
