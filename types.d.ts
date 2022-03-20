import { ReactNode, ReactElement } from "react"
import { NextPage } from "next"

type NextPageWithLayout<Props> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

declare namespace Intl {
  class ListFormat {
    constructor(locales?: string | string[], options?: Intl.ListFormatOptions);
    public format(items: string[]): string;
  }
}