import { useTitle } from 'hooks'
import { ClickCounter, HR, Title, Waves } from 'components'

/* ========================================================================
                                PageHome
======================================================================== */

const PageHome = () => {
  useTitle('Home')

  /* ======================
          return
  ====================== */

  return (
    <div
      // The parent is <div id='root'>, which has display: flex; flex-direction: column; min-height: 100vh;
      // 'flex-1' is used to make the page stretch vertically and fill up remaining space.
      // 'mx-auto' is used to center the container horizontally.
      // However, because the page element is a flex child, mx-auto may inadvertantly squish the content.
      // Conversely, 'mx-auto' can also cause content to bleed out of the bounds of the viewport.
      // To correct for this, we can use 'w-full'.
      // 'container' will overwrite 'w-full' when needed.
      className='2xl:container flex-1 mx-auto w-full p-6'
    >
      <Title
        style={{
          marginBottom: 50,
          textAlign: 'center'
        }}
      >
        Home
      </Title>

      <HR style={{ marginBottom: 50 }} />

      <div className='flex justify-center mb-2'>
        <ClickCounter />
      </div>

      <p className='text-center text-xs'>(Used to test Vitest & Storybook)</p>

      <Waves />
    </div>
  )
}

export default PageHome
