import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Avatar,
  Button,
  useTheme,
} from '@mui/material';
import { ReactComponent as TwitterSpaceIconMini } from '~/images/twitter-space-mini.svg';
import {
  signIn,
} from '~/apis/auth';

export const RouteTop = ({
  ...props
}) => {
  const theme = useTheme();

  const handleSignInClick = e => {
    signIn();
  };

  return (
    <Container
    >
      <Box
        mt={4}
        mb={6}
      >
        <Typography
          align="center"
          variant="h3"
          component="div"
        >
          <Link
            href="https://twitter.com/search?q=%23%E3%81%8F%E3%81%98%E3%82%B9%E3%83%9A&f=live"
            target="_blank"
          >
            #くじスペ
          </Link>
          &nbsp;開始時に通知を送信
        </Typography>
      </Box>

      <Box
        mt={4}
        mb={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="relative"
          sx={{
            width: '141.5px',
            height: '141.5px',
          }}
        >
          <Box
            position="relative"
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              position="absolute"
              sx={{
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(61.63deg, rgb(45, 66, 255) -15.05%, rgb(156, 99, 250) 104.96%)',
                borderRadius: '50%',
              }}
            />

            <Box
              position="absolute"
              sx={{
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                width: 'calc(100% - 12px)',
                height: 'calc(100% - 12px)',
                backgroundColor: 'background.default',
                borderRadius: '50%',
              }}
            />

            <Avatar
              src="https://pbs.twimg.com/profile_images/1439454062533955586/TdE7SUqL_400x400.jpg"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                width: 'calc(100% - 20px)',
                height: 'calc(100% - 20px)',
              }}
            />
          </Box>

          <Box
            position="absolute"
            sx={{
              right: '-4px',
              bottom: '-4px',
              width: '30%',
              height: '30%',
            }}
          >
            <Box
              position="absolute"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(61.63deg, rgb(45, 66, 255) -15.05%, rgb(156, 99, 250) 104.96%)',
                borderWidth: '4px',
                borderStyle: 'solid',
                borderColor: 'background.default',
                borderRadius: '50%',
                boxSizing: 'border-box',
              }}
            >
              <TwitterSpaceIconMini
                style={{
                  height: '18.75px',
                  color: '#fff',
                  fill: 'currentcolor',
                  padding: '2px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box
        mt={4}
        mb={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Button
          variant="contained"
          size="large"
          onClick={handleSignInClick}
        >
          さっそく通知を設定する
        </Button>

        <Box
          mt={1}
        >
          <Typography
            align="center"
            variant="caption"
            component="div"
          >
            通知設定には Twitter アカウントでのログインが必要です.
          </Typography>
          <Typography
            align="center"
            variant="caption"
            component="div"
          >
            新規ログインを行った時点で&nbsp;
            <Link
              href="https://ggtk.app/terms"
              target="_blank"
            >
              利用規約
            </Link>
            &nbsp;に同意したものとみなされます.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

