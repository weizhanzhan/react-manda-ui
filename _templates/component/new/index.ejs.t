---
to: src/components/<%= name %>/index.js
---

import React from 'react'
import Styled<%= name %> from './style'
import PropTypes from 'prop-types'

function <%= name %>({children, ...rest}) {
  return (
    <Styled<%= name %> {...rest}>
      {children}
    </Styled<%= name %>>
  )
}

<%= name %>.propTypes = {
  children:PropTypes.any
}

export default <%= name %>


