import * as React from 'react'
import { Menu } from './'

const ExampleMenu = () => {
  return (
    <div>
      <h2>Menu example</h2>
      <h3>Normal</h3>
      <Menu>
        <Menu.Item>menu A</Menu.Item>
        <Menu.Item>menu B</Menu.Item>
        <Menu.Item isChecked>menu C</Menu.Item>
        <Menu.Item>menu D</Menu.Item>
      </Menu>
      <h3>Group</h3>
      <Menu>
        <Menu.Item isHidden={true}>menu A</Menu.Item>
        <Menu.Item>menu B</Menu.Item>
        <Menu.Item>menu D</Menu.Item>
        <Menu.Group label="group">
          <Menu.Item>menu C</Menu.Item>
        </Menu.Group>
      </Menu>
      <h3>Disabled</h3>
      <Menu>
        <Menu.Item isDisabled>menu A</Menu.Item>
        <Menu.Item>menu B</Menu.Item>
        <Menu.Item>menu C</Menu.Item>
        <Menu.Item>menu D</Menu.Item>
      </Menu>
      <h3>Multiple</h3>
      <Menu>
        <Menu.Item isDisabled>menu A</Menu.Item>
        <Menu.Item isChecked isHaveCheckedIcon>
          menu B
        </Menu.Item>
        <Menu.Item isChecked isHaveCheckedIcon>
          menu C
        </Menu.Item>
        <Menu.Item>menu D</Menu.Item>
      </Menu>
    </div>
  )
}
export default ExampleMenu
