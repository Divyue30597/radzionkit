import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import styled from 'styled-components'
import { Panel } from '@reactkit/ui/ui/Panel/Panel'
import { sameDimensions } from '@reactkit/ui/css/sameDimensions'
import { PressTracker } from '@reactkit/ui/ui/PressTracker'
import { getColor } from '@reactkit/ui/ui/theme/getters'
import { toPercents } from '@reactkit/utils/toPercents'
import { Navigation } from 'navigation'

const Container = styled(Panel)`
  ${sameDimensions(320)}
  padding: 0;
`

const Highlight = styled.div`
  background: ${getColor('primary')};
`

const PressTrackerPage: NextPage = () => {
  return (
    <Navigation>
      <DemoPage title="Press Tracker" youtubeVideoId="Gj4Szl5pYFM">
        <PressTracker
          render={({ props, position }) => (
            <Container {...props}>
              {position && (
                <Highlight
                  style={{
                    width: toPercents(position.x),
                    height: toPercents(position.y),
                  }}
                />
              )}
            </Container>
          )}
        />
      </DemoPage>
    </Navigation>
  )
}

export default PressTrackerPage
