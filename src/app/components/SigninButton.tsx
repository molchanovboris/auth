"use client"
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { stringAvatar } from '@/libs/utils/stringAvatar';

const SigninButton = () => {
    const { data: session } = useSession();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log('session', session)

    if (session && session.user) {
        return (
            <div>
                {session.user.name && (
                    <>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Avatar
                                style={{ textTransform: "uppercase" }}
                                {...stringAvatar(session.user.name)}
                            />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
                        </Menu>
                    </>
                )}
            </div>
        )
    }

    return (
        <Button onClick={() => signIn()} variant="contained">Sign In</Button>

    )
}

export default SigninButton;