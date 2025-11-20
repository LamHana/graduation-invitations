import { link } from "fs";

export const data = [
  { id: "a3f9d2", name: "Ba", type: "GIA_DINH", message: "" },
  { id: "c5b8e1", name: "Mẹ", type: "GIA_DINH", message: "" },
  { id: "e94c0b", name: "Dũ", type: "DU", message: "" },
  { id: "b62f9e", name: "Anh iu", type: "ANH_IU", message: "" },
  {
    id: "f83a2b",
    name: "Quang Thành",
    type: "GAI_RG",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "a1e9f3",
    name: "Gia Hân",
    type: "GAI_RG",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "b4c5a7",
    name: "Ngọc Như",
    type: "GAI_RG",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "d3a7e9",
    name: "Lan Anh",
    type: "GAI_RG",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "e2b9f5",
    name: "Kiều Anh",
    type: "GAI_RG",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "f4c8b1",
    name: "Lâm Chí Khang",
    type: "GAI_12H",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "a6e2d4",
    name: "Hồng Thảo",
    type: "GAI_12H",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  {
    id: "b9f5a2",
    name: "Thùy Ngân",
    type: "GAI_12H",
    message:
      "Cảm ơn vì mấy bà đã luôn là phần quan trọng trong hành trình trưởng thành của tui. Chỉ mong là chúng mình cứ bên nhau mãi thui",
  },
  { id: "c2a4f7", name: "Hà Trang", type: "F_CODE", message: "" },
  { id: "d5b8c3", name: "Công Minh", type: "F_CODE", message: "" },
  { id: "e6f1a9", name: "Gia Linh", type: "F_CODE", message: "" },
  { id: "f7a3d2", name: "Minh Khôi", type: "F_CODE", message: "" },
  { id: "a8c5e4", name: "Như Nguyên", type: "F_CODE", message: "" },
  { id: "b1d6f8", name: "Dương Hoàng Nam", type: "DO_AN", message: "" },
  { id: "c4e9b2", name: "Văn Phú Hòa", type: "DO_AN", message: "" },
  { id: "d7a2c5", name: "Trần Tấn Thành", type: "DO_AN", message: "" },
  { id: "e9f4a3", name: "Chị Hạnh", type: "GNZ", message: "" },
  { id: "f2b7c6", name: "Nguyễn Nhi", type: "GNZ", message: "" },
  { id: "a3e8d1", name: "Tuyết Nhi", type: "GNZ", message: "" },
  { id: "b5f9a4", name: "Hoàng Yến", type: "GNZ", message: "" },
  { id: "c8a2e7", name: "Trúc Mai", type: "PGL", message: "" },
  { id: "d9b3f1", name: "Thầy LVT", type: "IELTS", message: "" },
  { id: "e1c5a8", name: "Chị Mint", type: "IELTS", message: "" },
  { id: "f3a9b7", name: "Chị Mía", type: "IELTS", message: "" },
  { id: "a4e2f5", name: "Minh Ngọc", type: "IELTS", message: "" },
  { id: "b6c3a9", name: "Trí Phan", type: "IELTS", message: "" },
  { id: "c7f8b4", name: "Thành Nhân", type: "IELTS", message: "" },
  { id: "d1a9e6", name: "Châu Anh", type: "IELTS", message: "" },
  { id: "e5b2f9", name: "Quỳnh Giao", type: "IELTS", message: "" },
  { id: "f8a3c1", name: "Thắm", type: "IELTS", message: "" },
  { id: "a9d5e7", name: "Quốc Tuấn", type: "IELTS", message: "" },
  { id: "b2f4c8", name: "Quốc Đạt", type: "IELTS", message: "" },
  { id: "c3a7b1", name: "Khánh My", type: "NAB", message: "" },
  { id: "d4b8f6", name: "Thảo Đào", type: "NAB", message: "" },
  { id: "e7c1a5", name: "Lương Bùi", type: "NAB", message: "" },
  { id: "f9a4d2", name: "Mẫn Nhi", type: "NAB", message: "" },
  { id: "a2e5f3", name: "Bảo Anh", type: "NAB", message: "" },
  { id: "b7c9a1", name: "Bạn", type: "BAN", message: "" },
  { id: "b0c9a9", name: "", type: "BAN", message: "" },
];

export enum GuestType {
  GIA_DINH = "GIA_DINH",
  ANH_IU = "ANH_IU",
  GAI_RG = "GAI_RG",
  GAI_12H = "GAI_12H",
  F_CODE = "F_CODE",
  DO_AN = "DO_AN",
  GNZ = "GNZ",
  IELTS = "IELTS",
  NAB = "NAB",
  BAN = "BAN",
  PGL = "PGL",
  DU = "DU",
}

export const guestTypeData = {
  [GuestType.GAI_RG]: {
    image1: "/rg-1.webp",
    image2: "/rg-2.webp",
    image3: "/rg-3.webp",
    video: "/rg-video.webm",
    imageQuote: null,
    signature: "Quễ",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ tui 1 xíu nhé, tui sẽ cập nhật các hình của mấy chị đẹp ở dưới đây, cũng đừng quên chia sẻ cho tui các hình ảnh của mấy bà ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/19hmkxbmPCOgxhzd30Z8Hwh2Ghyr0moEg?usp=sharing",
  },
  [GuestType.GAI_12H]: {
    image1: "/12H-1.webp",
    image2: "/12H-2.webp",
    image3: "/12H-3.webp",
    video: "/12H-video.webm",
    imageQuote: null,
    signature: "Lâm Ngọc Hồng Chí Hana Hói thấy mà ghê",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ tui 1 xíu nhé, tui sẽ cập nhật các hình của mấy bà rắn ở dưới đây, cũng đừng quên chia sẻ cho tui các hình ảnh của mấy bà ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1A1xfu-6r_PirpNLacUCCoxoFJkDIaMIR?usp=sharing",
  },
  [GuestType.F_CODE]: {
    image1: "/f-code-1.webp",
    image2: "/f-code-2.webp",
    image3: "/f-code-3.webp",
    video: null,
    imageQuote: "/f-code-1.webp",
    signature: "Ngọc Hân",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ tui 1 xíu nhé, tui sẽ cập nhật các hình của mấy bà ở dưới đây, cũng đừng quên chia sẻ cho tui các hình ảnh của mấy bà ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/12YlH5NDOc4eu0HTHEAQ2NpvfHpzZJ06c?usp=sharing",
  },
  [GuestType.DO_AN]: {
    image1: "/capstone-1.webp",
    image2: "/capstone-2.webp",
    image3: "/capstone-3.webp",
    video: null,
    imageQuote: "/capstone-4.webp",
    signature: "Ngọc Hân",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ mình 1 xíu nhé, mình sẽ cập nhật các hình của mọi người ở dưới đây, cũng đừng quên chia sẻ cho mình các hình ảnh của mọi người ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/15QGoGu5hB7wWRSNbJgY8kX-Xn3ghBYOX?usp=sharing",
  },
  [GuestType.GNZ]: {
    image1: "/gnz-1.webp",
    image2: "/gnz-2.webp",
    image3: "/gnz-3.webp",
    video: null,
    imageQuote: "/gnz-3.webp",
    signature: "Ngọc Hân",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ mình 1 xíu nhé, mình sẽ cập nhật các hình của mấy xinh iu ở dưới đây, cũng đừng quên chia sẻ cho mình các hình ảnh của mấy xinh iu ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1_PI2zkRSP2FDsSfprgmAO7m5WuY6_Ee2?usp=sharing",
  },
  [GuestType.IELTS]: {
    image1: "/ielts-1.webp",
    image2: "/ielts-2.webp",
    image3: "/ielts-3.webp",
    video: null,
    signature: "Ngọc Hân",
    imageQuote: "/ielts-4.webp",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ mình 1 xíu nhé, mình sẽ cập nhật các hình của mọi người ở dưới đây, cũng đừng quên chia sẻ cho mình các hình ảnh của mọi người ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1qck194C8NzJwzlHEPu-BeLc0jhKKKjSo?usp=sharing",
  },
  [GuestType.NAB]: {
    image1: "/nab-1.webp",
    image2: "/nab-2.webp",
    image3: "/nab-3.webp",
    video: null,
    signature: "Con Dê Vàng",
    imageQuote: "/nab-4.webp",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ tui 1 xíu nhé, tui sẽ cập nhật các hình của mấy con dê ở dưới đây, cũng đừng quên chia sẻ cho tui các hình ảnh của mấy con dê ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1K7cKotkhFNE33JtuAGxhX-hW79zPIQdw?usp=sharing",
  },
  [GuestType.PGL]: {
    image1: "/mai-1.webp",
    image2: "/mai-2.webp",
    image3: "/mai-3.webp",
    video: null,
    signature: "Chị đồng nghiệp dth của em",
    imageQuote: "/mai-4.webp",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ chị Mai 1 xíu nhé, chị sẽ cập nhật các hình của em ở dưới đây, cũng đừng quên chia sẻ cho chị các hình ảnh của em ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1vlqh3PniLOVmwQ5HUaY6VphupTf9nqFC?usp=sharing",
  },
  [GuestType.ANH_IU]: {
    image1: "/bao-1.webp",
    image2: "/bao-2.webp",
    image3: "/bao-3.webp",
    video: "/bao-video.webm",
    imageQuote: null,
    signature: "Em iu",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ Hana 1 xíu nhé, Hana sẽ cập nhật các hình của anh iu ở dưới đây, cũng đừng quên chia sẻ cho Hana các hình ảnh của anh iu ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1oeaiLUTBX93_4VpnBsap1tH-yhZZof80?usp=sharing",
  },
  [GuestType.DU]: {
    image1: "/du-1.webp",
    image2: "/du-2.webp",
    image3: "/du-3.webp",
    video: null,
    signature: "Chị Ba",
    imageQuote: "/du-4.webp",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ tui 1 xíu nhé, tui sẽ cập nhật các hình của bà ở dưới đây, cũng đừng quên chia sẻ cho tui các hình ảnh của bà ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1m1WqPThlfd2u-LTJdl-uxqnsLP5Xa5o8?usp=sharing",
  },
  [GuestType.GIA_DINH]: {
    image1: "/family-1.webp",
    image2: "/family-2.webp",
    image3: "/family-3.webp",
    video: null,
    signature: "Con của ba mẹ",
    imageQuote: "/family-4.webp",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ con 1 xíu nhé, con sẽ cập nhật các hình của mọi người ở dưới đây, cũng đừng quên chia sẻ cho con các hình ảnh của mọi người ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/1m1WqPThlfd2u-LTJdl-uxqnsLP5Xa5o8?usp=sharing",
  },
  [GuestType.BAN]: {
    image1: "/friend-1.webp",
    image2: "/friend-2.webp",
    image3: "/friend-3.webp",
    video: null,
    signature: "Ngọc Hân",
    imageQuote: "/friend.webp",
    since: "Từ năm <span className='text-5xl'>2018</span>",
    message: "Hội gái đẹp Hùng Vương được thành lập.",
    message1: "Chuyến đi xa đầu tiên của tụi mình nè <span className='font-bold'>Sài Gòn - Vũng Tàu</span>",
    message2:
      "Tui vẫn đang manifest một chuyến đi Đà Lạt <span className='font-bold'>Tháng 12 2025</span> của tụi mình á",
    updateMessage:
      " Hãy chờ tui 1 xíu nhé, tui sẽ cập nhật các hình của bạn ở dưới đây, cũng đừng quên chia sẻ cho tui các hình ảnh của bạn ở buổi lễ nha",
    link: "https://drive.google.com/drive/folders/15KEilVmqNwM_y_ahDIEDms4hTeC2EQ11?usp=sharing",
  },
};
