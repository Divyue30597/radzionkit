import type { NextPage } from 'next'

import { DemoPage } from 'components/DemoPage'
import { ShowOnce } from 'state/ShowOnce'
import { PersistentStateKey } from 'state/persistentState'
import { ClientOnly } from '@reactkit/ui/ui/ClientOnly'
import { Navigation } from 'navigation'

const ShowOncePage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage title="Show once" youtubeVideoId="jFKjpAsm24I">
        <ClientOnly>
          <ShowOnce storageKey={PersistentStateKey.ShowOnceEducation}>
            You will see this sentence only once.
          </ShowOnce>
        </ClientOnly>
      </DemoPage>
    </Navigation>
  )
}

export default ShowOncePage
