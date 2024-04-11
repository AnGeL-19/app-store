
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import {SidebarContent} from "./SidebarContent";
import {ItemsContentMenu} from "./ItemsContentMenu";


export const SidebarMenu = ({ visible, setVisible }) => {

    const customHeader = () => {
        return (
            <span>Kroenen</span>
        )
    }

    return (
        <div>
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                header={customHeader}
                >
                <ItemsContentMenu />
            </Sidebar>
        </div>
    )
}

SidebarMenu.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func,
}
