// components/Sidebar.js
import { NavLink } from '@mantine/core';
import styles from './Sidebar.module.css';


export default function Sidebar() {
    return (
        <div className={styles.sidebar}> {/* Apply the class from the CSS module */}
            <NavLink label="Remover" style={{ color: 'white' }} />
            <NavLink label="Splitter" style={{ color: 'white' }} />
            <NavLink label="Pitcher" style={{ color: 'white' }} />
            <NavLink label="Key BPM Finder" style={{ color: 'white' }} />
            <NavLink label="Cutter" style={{ color: 'white' }} />
            <NavLink label="Joiner" style={{ color: 'white' }} />
            <NavLink label="Support" style={{ color: 'white' }} />
        </div>
    );
}

