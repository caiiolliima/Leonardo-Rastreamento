import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import MyApp from './Components/MyApp';

function App() {

  return (
    <>
    <html>
      <body>
        <Theme>
          <MyApp />
        </Theme>
      </body>
    </html>
    </>
  )
}

export default App
