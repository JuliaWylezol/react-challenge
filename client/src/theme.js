import { createTheme } from '@mui/material';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5D5D',
      light: '#FCECE6',
      contrastText: '#fff',
    },
    success: {
      main: '#00A980',
      light: '#DBEBDB',
      contrastText: '#00A980',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.074rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.728rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.44rem',
    },
    h5: {
      fontSize: '1.44rem',
    },
    h6: {
      fontSize: '1.44rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '500',
          fontSize: '15px',
          boxShadow: 'none',
          textTransform: 'none',
          fontFamily: 'Inter, sans-serif',
          '&.MuiButton-outlinedPrimary': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            border: 'none',
            '&.Mui-disabled': {
              backgroundColor: 'rgba(51, 51, 51, 0.07)',
              color: 'rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:active': {
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.primary.dark,
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.primary.dark,
              boxShadow: 'none',
            },
          },
          '&.MuiButton-containedPrimary': {
            backgroundColor: theme.palette.primary.main,
            color: '#FFF',
            '&.Mui-disabled': {
              backgroundColor: 'rgba(51, 51, 51, 0.07)',
              color: 'rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.primary.dark,
              color: '#FFF',
              boxShadow: 'none',
            },
            '&.MuiButton-root:active': {
              backgroundColor: theme.palette.primary.dark,
              color: '#FFF',
            },
          },

          '&.MuiButton-outlinedError': {
            color: theme.palette.error.main,
            border: '1px solid #FF5d5d',
            '&.Mui-disabled': {
              color: 'rgba(51, 51, 51, 0.25)',
              border: '1px solid rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:active': {
              backgroundColor: theme.palette.error.light,
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.error.light,
              boxShadow: 'none',
            },
          },
          '&.MuiButton-containedError': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,

            '&.Mui-disabled': {
              backgroundColor: 'rgba(51, 51, 51, 0.07)',
              color: 'rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.error.main,
              color: '#FFF',
              boxShadow: 'none',
            },
          },

          '&.MuiButton-outlinedSuccess': {
            '&.MuiButton-root:active': {
              backgroundColor: theme.palette.success.light,
              color: theme.palette.success.main,
              border: '1px solid #66BB6A',
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.success.light,
              color: theme.palette.success.main,
              border: '1px solid #66BB6A',
              boxShadow: 'none',
            },
          },
          '&.MuiButton-containedSuccess': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
            '&.Mui-disabled': {
              backgroundColor: 'rgba(51, 51, 51, 0.07)',
              color: 'rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.success.main,
              color: '#FFF',
              boxShadow: 'none',
            },
          },

          '&.MuiButton-outlinedWarning': {
            color: theme.palette.warning.main,
            border: '1px solid #FFA726',
            '&.Mui-disabled': {
              color: 'rgba(51, 51, 51, 0.25)',
              border: '1px solid rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:active': {
              backgroundColor: theme.palette.warning.light,
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.warning.light,
              boxShadow: 'none',
            },
          },
          '&.MuiButton-containedWarning': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,

            '&.Mui-disabled': {
              backgroundColor: 'rgba(51, 51, 51, 0.07)',
              color: 'rgba(51, 51, 51, 0.25)',
            },
            '&.MuiButton-root:hover': {
              backgroundColor: theme.palette.warning.main,
              color: '#FFF',
              boxShadow: 'none',
            },
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey['500'],
          '& :hover': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
          },
          '&.Mui-selected': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            borderBottom: '2px solid #0666eb',
            color: theme.palette.primary.main,
          },

          '.MuiTypography-root': {
            fontWeight: '500',
            fontSize: '14px',
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#33333350',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '40px 32px',
          border: 'none',
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '0',
          fontSize: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  },
});

export { theme };
