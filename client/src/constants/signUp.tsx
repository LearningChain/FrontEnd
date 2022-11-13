interface MemberConstant {
    LIMIT: Record<string, { MINIMUM_LENGTH: number; MAXIMUM_LENGTH: number }>;
  }
  
  export const MEMBER: MemberConstant = {
    LIMIT: {
      PASSWORD: {
        MINIMUM_LENGTH: 8,
        MAXIMUM_LENGTH: 30,
      },
      USERNAME: {
        MINIMUM_LENGTH: 1,
        MAXIMUM_LENGTH: 16,
      },
      ID: {
        MINIMUM_LENGTH: 4,
        MAXIMUM_LENGTH: 16,
      },
    },
  };
  
  export const SIGN_UP_ERROR = {
    INVALID_PASSWORD: `비밀번호는 영어, 숫자, 특수문자가 포함된 ${MEMBER.LIMIT.PASSWORD.MINIMUM_LENGTH}~${MEMBER.LIMIT.PASSWORD.MAXIMUM_LENGTH}자입니다.`,
    BLANK_PASSWORD: '비밀번호를 입력해주세요.',
    INVALID_PASSWORD_CONFIRMATION: '동일한 비밀번호를 입력해주세요.',
    DUPLICATED_USERNAME: '이미 사용중인 이메일 or 아이디입니다.',
    BLANK_USERNAME: '이름을 입력해주세요.',
    INVALID_USERNAME: `이름은 ${MEMBER.LIMIT.USERNAME.MINIMUM_LENGTH}~${MEMBER.LIMIT.USERNAME.MAXIMUM_LENGTH}자입니다.`,
    DUPLICATED_ID: '이미 사용중인 이메일 or 아이디입니다.',
    INVALID_ID: `아이디는 ${MEMBER.LIMIT.ID.MINIMUM_LENGTH}~${MEMBER.LIMIT.ID.MAXIMUM_LENGTH}자입니다.`,
    BLANK_ID: '아이디를 입력해주세요.',
    INVALID_EMAIL: '올바른 이메일 형식을 입력해주세요',
  };