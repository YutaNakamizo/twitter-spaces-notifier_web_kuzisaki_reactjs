import React from 'react';
import {
  Box,
  Divider,
  Container,
  Typography,
  Link,
} from '@mui/material';

export const CommonFooter = ({
  ...props
}) => {
  return (
    <Box
      component="footer"
      {...props}
    >
      <Divider
      />

      <Box
        pt={4}
        pb={4}
      >
        <Container
          maxWidth="md"
        >
          <Typography
            variant="caption"
            paragraph
            align="center"
          >
            この Web サイトおよび通知システムは&nbsp;
            <Link
              href="https://ggtk.app"
              target="_blank"
            >
              Stardust Sorcery
            </Link>
            &nbsp;/&nbsp;
            <Link
              href="https://ggtk.dev"
              target="_blank"
            >
              Yuta NAKAMIZO
            </Link>
            &nbsp;が管理・運営するファンサイト, ファンコンテンツの 1 つです.
          </Typography>

          <Typography
            variant="caption"
            paragraph
            align="center"
          >
            <Link
              href="https://ggtk.app/contacts"
              target="_blank"
            >
              お問い合わせ
            </Link>
            &nbsp;|&nbsp;
            <Link
              href="https://ggtk.app/privacy"
              target="_blank"
            >
              プライバシーポリシー
            </Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

