import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f3f4f6;
    color: #374151;
  }

  /* Sidebar */
.sidebar {
  width: 300px;
  background-color: #fff;
  border-right: 1px solid #e5e7eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding-top: 64px; /* 👈 space for fixed header */
}

  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    font-size: 12px;
    cursor: pointer;
    color: #374151;
  }

  .sidebar-item:hover {
    background-color: #f3f4f6;
  }

  .sidebar-item.active {
    background-color: #dc2626;
    color: white;
    font-weight: semi-bold;
  }

  /* Content area */
  main {
    margin-left: 256px;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    padding-top: 80px; /* Prevent overlap with fixed header */
    padding-left: 16px;
    padding-right: 16px;
  }

  /* Header */
  .header {
    background-color: #374151;
    color: white;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  @media (min-width: 640px) {
    .header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 64px;
    }
  }

  .logo {
    background-color: #dc2626;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .logo-icon {
    font-size: 16px;
  }

  .search-container {
    position: relative;
    width: 100%;
    margin-top: 8px;
  }

  @media (min-width: 640px) {
    .search-container {
      margin-top: 0;
      flex: 1;
    }
  }

  .search-input {
    background-color: #4b5563;
    color: white;
    padding: 6px 12px 6px 36px;
    border: none;
    border-radius: 4px;
    width: 100%;
    outline: none;
    font-size: 14px;
  }

  .search-input::placeholder {
    color: #9ca3af;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    opacity: 0.6;
  }

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    font-size: 14px;
  }

  @media (min-width: 640px) {
    .header-right {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }

  .office-title {
    font-weight: bold;
    font-size: 14px;
  }

  .status-badge {
    background-color: #10b981;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .status-badge.warning {
    background-color: #f59e0b;
    color: #fff;
  }

  .status-icon {
    font-size: 14px;
  }
`;

export const theme = {
    colors: {
        primary: '#dc2626',
        grayText: '#374151',
        hoverGray: '#f3f4f6',
        white: '#ffffff',
    },
    sidebarWidth: '300px',
};
