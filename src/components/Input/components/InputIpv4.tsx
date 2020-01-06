import * as React from 'react'

import '../styles/inputipv4.scss'

type Attr = Omit<React.HTMLAttributes<HTMLSpanElement>, keyof Props>

type Props = {
  id: string
  onChange?: (e, v: string, id: string) => void
  value: string
  verifyMsg?: string
  onBlur?: (e) => void
}
export default class InputIpv4 extends React.Component<
  Attr & Props,
  {
    currentFocusId: string
  }
> {
  inputRefs: React.RefObject<InputInsideIpv4>[]
  // value: string
  constructor(props) {
    super(props)
    this.state = {
      currentFocusId: null,
    }
    this.inputRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()]
    // this.value = props.value
  }
  handlePressDot = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '.') {
      const { currentFocusId } = this.state
      const targetRef = this.inputRefs[(Number(currentFocusId) + 1) % 4]
      targetRef.current && targetRef.current.focus()
    }
  }
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const currentFocusId = e.target.id
    this.setState({
      currentFocusId,
    })
  }
  handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      currentFocusId: null,
    })
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [{ current: input0 }, { current: input1 }, { current: input2 }, { current: input3 }] = this.inputRefs
    const [value0, value1, value2, value3] = [
      (input0 && input0.value) || 0,
      (input1 && input1.value) || 0,
      (input2 && input2.value) || 0,
      (input3 && input3.value) || 0,
    ]
    let value = `${value0}.${value1}.${value2}.${value3}`
    const { onChange } = this.props
    onChange && onChange(e, value, this.props.id)
  }
  render() {
    const { onChange, verifyMsg, onBlur, value, ...res } = this.props
    const { currentFocusId } = this.state
    const _value = value.split('.')
    const clsName = 'q-ui-input-ipv4-wrapper' + (verifyMsg ? ' has-error' : '') + (currentFocusId ? ' focus' : '')
    return (
      <div onBlur={this.handleBlur} onFocus={this.handleFocus}>
        <span className={clsName} {...res}>
          <InputInsideIpv4
            id="0"
            value={_value[0]}
            ref={this.inputRefs[0]}
            onBlur={onBlur}
            onKeyPress={this.handlePressDot}
            onChange={this.handleChange}
          />
          .
          <InputInsideIpv4
            id="1"
            value={_value[1] === undefined ? '' : _value[1]}
            ref={this.inputRefs[1]}
            onBlur={onBlur}
            onKeyPress={this.handlePressDot}
            onChange={this.handleChange}
          />
          .
          <InputInsideIpv4
            id="2"
            value={_value[2] === undefined ? '' : _value[2]}
            ref={this.inputRefs[2]}
            onBlur={onBlur}
            onKeyPress={this.handlePressDot}
            onChange={this.handleChange}
          />
          .
          <InputInsideIpv4
            id="3"
            value={_value[3] === undefined ? '' : _value[3]}
            ref={this.inputRefs[3]}
            onBlur={onBlur}
            onChange={this.handleChange}
          />
        </span>
        <div className="q-ui-input-validate-msg">{verifyMsg}</div>
      </div>
    )
  }
}

class InputInsideIpv4 extends React.Component<any> {
  inputRef: React.RefObject<HTMLInputElement>
  isLegalChar: boolean
  value: string | number
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.isLegalChar = true
    this.value = props.value
  }
  focus = () => {
    this.inputRef.current && this.inputRef.current.focus()
  }
  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value: number | string = Number(e.target.value.replace(/\.|\e/, ''))
    value = value < 0 ? 0 : value > 255 ? 255 : value
    if (!Number.isNaN(value)) {
      value = value.toFixed(0)
      this.value = value
    }
    const { onChange } = this.props
    onChange && onChange(e)
  }
  render() {
    return (
      <input
        {...this.props}
        type="text"
        pattern="[0-9]*"
        className="q-ui-input-ipv4"
        ref={this.inputRef}
        onChange={this.handleOnChange}
      />
    )
  }
}
