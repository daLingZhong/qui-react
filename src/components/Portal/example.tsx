import * as React from 'react'

import Portal, { PortalWithState } from './'

const ExamplePage = () => {
  const node = document.body.appendChild(document.createElement('div'))
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setData([{ test: 'test' }])
    }, 2000)
  }, [])

  return (
    <div>
      <h2>Portal Example</h2>
      <p>打开控制台选择element，可以看到该button已经被渲染到document.body的子节点下</p>

      <Portal key="portal" container={node}>
        <div>
          <h3>Normal</h3>
          <button>Normal</button>
        </div>
      </Portal>

      <PortalWithState closeOnOutsideClick={true}>
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <h3>With State</h3>

            <button type="button" onClick={openPortal}>
              Open Portal
            </button>

            {isOpen &&
              portal(
                <p>
                  This is more advanced Portal. It handles its own state.{' '}
                  <button type="button" onClick={closePortal}>
                    Close me!
                  </button>
                </p>
              )}
          </React.Fragment>
        )}
      </PortalWithState>

      <PortalWithState trigger="hover" position="bottom">
        {({ openPortal, closePortal, isOpen, portal }) => (
          <span>
            <button type="button" onMouseEnter={openPortal} onMouseLeave={closePortal}>
              Hover Open Portal
            </button>

            {isOpen &&
              portal(
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#000',
                  }}
                  onMouseEnter={openPortal}
                  onMouseLeave={closePortal}
                >
                  test
                </div>
              )}
          </span>
        )}
      </PortalWithState>

      <div
        style={{ height: '200px', overflowY: 'scroll', backgroundColor: 'gray', padding: '40px', position: 'relative' }}
      >
        <div id="test" style={{ height: '400px' }}>
          <PortalWithState trigger="hover" position="bottom" container={document.querySelector('#test')}>
            {({ openPortal, closePortal, isOpen, portal }) => (
              <span>
                <button type="button" onMouseEnter={openPortal} onMouseLeave={closePortal}>
                  Hover Open Portal
                </button>

                {isOpen &&
                  portal(
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#000',
                      }}
                      onMouseEnter={openPortal}
                      onMouseLeave={closePortal}
                    >
                      test
                    </div>
                  )}
              </span>
            )}
          </PortalWithState>
        </div>
      </div>
    </div>
  )
}

export default ExamplePage
