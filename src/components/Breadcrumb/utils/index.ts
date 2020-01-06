import * as React from 'react'

export function filterFragment(children: any) {
  return React.Children.toArray(children).map((child: React.ReactElement) => {
    const props = (child as React.ReactElement<any>).props

    if (React.isValidElement(child) && child.type === React.Fragment) {
      return props.children
    }
    return child
  })
}
