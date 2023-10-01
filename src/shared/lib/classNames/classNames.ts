type Modes = Record<string, boolean>

function classNames(cls: string, modes: Modes = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(modes).filter(className => modes[className])
  ]
    .join(' ')
}

export { classNames as cn }
