import { useState } from 'react'
import { Box, Button, Flex, Drawer, IconButton, VStack } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { FaTicket, FaXmark } from 'react-icons/fa6'
import Logo from '../photos/logos/LOGO1.svg'
import './Components.css'

export default function NavBar() {
    // In Chakra v3 si usa uno stato React standard per controllare la prop "open"
    const [open, setOpen] = useState(false)

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            className="navbar-container"
            bg="rgba(255, 255, 255, 0.95)"
            backdropFilter="blur(8px)"
            borderBottom="1px solid rgba(0, 0, 0, 0.05)"
        >
            <Flex
                className="navbar"
                justifyContent="space-between"
                alignItems="center"
                px={{ base: 4, md: 8 }}
                py={4}
                minH="70px"
            >
                {/* Logo a sinistra */}
                <Box className="navbar-logo" w="80px" h="auto" flexShrink={0}>
                    <img src={Logo} alt="Castello di Rivoli" style={{ width: '100%', height: 'auto' }} />
                </Box>

                {/* Desktop: Bottoni a destra */}
                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    gap={4}
                    alignItems="center"
                    className="info-buttons"
                >
                    <Button
                        variant="ghost"
                        className="nav-button tickets-button"
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        }}
                        transition="all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    >
                        <Flex alignItems="center" gap={2}>
                            <FaTicket /> Biglietti
                        </Flex>
                    </Button>

                    {/* AZIONE: Questo apre il drawer modificando lo stato open a true */}
                    <Button
                        variant="ghost"
                        className="nav-button menu-button"
                        onClick={() => setOpen(true)}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                        }}
                        transition="all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    >
                        Menu
                    </Button>
                </Flex>

                {/* Mobile: Hamburger menu */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    aria-label="Open Menu"
                    variant="ghost"
                    onClick={() => setOpen(!open)}
                    className="hamburger-button"
                    _hover={{
                        bg: 'rgba(0, 0, 0, 0.05)',
                    }}
                >
                    {open ? <FaXmark /> : <FaBars />}
                </IconButton>
            </Flex>

            {/* STRUTTURA DRAWER CHAKRA v3 */}
            <Drawer.Root
                open={open}
                onOpenChange={(e) => setOpen(e.open)}
                placement="end" // In v3 si usa "end" o "start" al posto di "right" o "left"
            >
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content className="drawer-content" borderLeftWidth="1px">

                        {/* Questo trigger chiude il Drawer nativamente in v3 */}
                        <Drawer.CloseTrigger />

                        <Drawer.Header borderBottomWidth="1px" fontSize="xl" fontWeight="600">
                            Menù
                        </Drawer.Header>

                        <Drawer.Body>
                            <VStack spacing={6} align="stretch" py={4}>
                                {/* Mostra il bottone biglietti nel drawer SOLO su mobile */}
                                <Button
                                    display={{ base: 'flex', md: 'none' }}
                                    w="100%"
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    className="mobile-nav-button"
                                >
                                    <Flex alignItems="center" gap={2}>
                                        <FaTicket /> Biglietti
                                    </Flex>
                                </Button>

                                <Button
                                    w="100%"
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    className="drawer-button"
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.05)', transform: 'translateX(4px)' }}
                                >
                                    Collezioni
                                </Button>
                                <Button
                                    w="100%"
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    className="drawer-button"
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.05)', transform: 'translateX(4px)' }}
                                >
                                    Mostre
                                </Button>
                                <Button
                                    w="100%"
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    className="drawer-button"
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.05)', transform: 'translateX(4px)' }}
                                >
                                    Visita
                                </Button>
                                <Button
                                    w="100%"
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    className="drawer-button"
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.05)', transform: 'translateX(4px)' }}
                                >
                                    Chi Siamo
                                </Button>
                                <Button
                                    w="100%"
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    className="drawer-button"
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.05)', transform: 'translateX(4px)' }}
                                >
                                    Contatti
                                </Button>
                            </VStack>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>
        </Box>
    )
}