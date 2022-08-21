import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MantineProvider} from "@mantine/core";
import MealsProvider from "./context/MealsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MealsProvider>
        <Component {...pageProps} />  
      </MealsProvider>
    </MantineProvider>
  ) 
}

export default MyApp
