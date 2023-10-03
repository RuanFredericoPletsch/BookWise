import { cva } from '../../styled-system/css'
import { styled } from '../../styled-system/jsx'

export const PageContent = styled(
  'main',
  cva({
    base: {
      px: '24',
      py: '72px',
      ml: '252px',
      maxW: 'calc(100vw - 252px)',
      display: 'flex',
      flexDir: 'columm',
    },
  }),
)

export const RecentRatings = styled(
  'p',
  cva({
    base: {
      textStyle: 'textSm',
      color: 'gray.100',
      mb: '1',
      py: '1',
    },
  }),
)

export const Title = styled(
  'h1',
  cva({
    base: {
      textStyle: 'headingLg',
      color: 'gray.100',
      display: 'flex',
      alignItems: 'center',
      gap: '3',
    },
  }),
)
