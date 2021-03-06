import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Icons = {
  featureIcon: `
<svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
>
    <g fill="none">
        <path d="M-2-2h24v24h-24z" />
        <path
            d="M10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 15l-5-5 1.41-1.41 3.59 3.58 7.59-7.59 1.41 1.42-9 9z"
            fill="currentColor"
            fill-rule="nonzero"
        />
    </g>
</svg>`,
  notIncludedIcon: `
<svg
  aria-hidden="true"
  focusable="false"
  width="20"
  height="20"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none">
    <path d="M-2-2h24v24h-24z" />
    <path
      d="M5 9v2h10v-2h-10zm5-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
      fill-rule="nonzero"
    />
  </g>
</svg>`,
}

const Icon = React.forwardRef(({ icon, variant }, ref) => {
  return <Box ref={ref} as={Icons[icon]} variant={variant} __themeKey="icons" />
})

Icon.encode = (name) => `data:image/svg+xml; utf8, ${Icons[name]}`

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

Icon.defaultProps = {
  variant: 'default',
}

export default Icon
