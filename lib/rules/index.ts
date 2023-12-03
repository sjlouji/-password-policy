const rulesMap: any = {
  length: await import('./length'),
  contains: await import('./contains'),
  exclude: await import('./exclude'),
}

export default rulesMap;
