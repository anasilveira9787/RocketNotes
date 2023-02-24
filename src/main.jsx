import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme  from './styles/theme'
import GlobalStyles from './styles/global'

import { Details } from './pages/Details' // aqui a gente importa os componentes dessa página. Entre chaves {} temos que usar o nome estrito da função, é melhor para segurança.



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Details /> {/* aqui tem que ser o mesmo nome do termo que está dentro de {} em import */}

    </ThemeProvider>
  
  </React.StrictMode>,
)
