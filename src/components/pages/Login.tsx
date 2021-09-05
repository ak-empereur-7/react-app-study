import { memo, ChangeEvent, useState, VFC } from "react"
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButtoh } from "../../atomos/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading} = useAuth();

  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }

  const onClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
        <Divider my={4} />

        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザID" value={userId} onChange={onChangeUserId} />
          <PrimaryButtoh
            disabled={userId === "" || loading}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButtoh>
        </Stack>
      </Box>
    </Flex>
  );
});