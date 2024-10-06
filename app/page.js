// app/page.js
'use client';

import Sidebar from '@/components/SideBar';
import { Container, Text, Button, Burger, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Home() {
  const [sidebarOpened, { toggle }] = useDisclosure(false); // Manage sidebar state

  return (


    <div style={{ display: 'flex' }}>
      {sidebarOpened && <Sidebar />} {/* Render sidebar only if opened */}

      <Container className='container'>
        <Burger
          opened={sidebarOpened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="white" // Set the icon color to white
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            zIndex: 1001,
          }}
        />

        <div className='menu'>
          <Button variant="subtle" style={{ backgroundColor: 'transparent', border: 'none' }}>
            HOW IT WORKS
          </Button>

          <Button variant="subtle" style={{ backgroundColor: 'transparent', border: 'none' }}>
            DONATE
          </Button>
        </div>

        <div className='H1'>
          <Text size="xl" weight={700} mt="md">
            Vocal Remover and Isolation
          </Text>
        </div>

        <div className='H2'>
          <Text mt="xs">
            Separate voice from music out of a song free with powerful AI algorithms
          </Text>
        </div>

        <div>
          <img className='img' src="/images/player_en@2x.png" alt="Vocal Remover and Isolation" />
        </div>

        <div className='btn'>
          <Button style={{ marginTop: '20px', borderRadius: '1rem', borderColor: '#665DC3', backgroundColor: 'transparent' }}>
            Browse my files
          </Button>
        </div>
      </Container>
    </div>

  );
}
