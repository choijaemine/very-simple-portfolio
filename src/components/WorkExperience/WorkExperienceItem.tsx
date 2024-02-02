import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";
import React from "react";
import Link from "next/link";

const WorkExperienceItem = ({ name, position, period, markdown, imgSrc }: WorkExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
          />
        )}
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{position}</span>
            <span>{`${period[0]} - ${period[1]}`}</span>
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full">
        <div className={'pb-10'}>
          <h2>overall</h2>
          <p>MVNO 통신 업체인 스마텔에서 front, back,cloud 등 다양한 업무를 수행 하고있습니다. </p>
          <p>합류 시점에서 서비스가 여러 외주업체를 통해 일관성 없이 관리가 되어있었고,<br/>새로운 아키텍처 도입, 개선하는데 집중하고있습니다.</p>
        </div>

        <div className={'pb-10'}>
          <h2>아키텍처 개선</h2>
          <p className={'text-[20px]'}>기술 스택 전환</p>
          <p>mysql, spring, vue.js, aws 로 초기 서비스를 운영 중 서비스 구조가 바뀌거나 기획의 변하는 상황이 자주 발생하여 기존 기술 스택으로 운영하기에 무리가 있다고 판단하여,
            개발팀 자체 회의 후 빠른 변화에 대응하기위해 mongo db, next.js 의 SSR을 활용하여 SEO 향상, vercel CI/CD 자동화 및 배포에 용이하게 구조를 변경하였습니다.</p>
        </div>

        <div className={'pb-10'}>
          <h2>스마텔 메인 홈페이지 <Link href={'https://smartel.kr/'}>Link</Link></h2>
          <p>2023. 10 - 2024. 01</p>
          <h3 className={'text-[20px]'}>Description.</h3>
          <p>기존에 운영되고 있는 스마텔 메인 홈페이지를 리뉴얼 하여, 사용자들이 쉽게 서비스를 이용할 수 있도록 개선하였습니다.</p>
          <h3 className={'text-[20px]'}>What did I do.</h3>
          <ul>
            <li>요금제 검색 관련 로직 개발</li>
            <ul>
              <li></li>
            </ul>
            <li>회원 관련 로직 개발</li>
          </ul>
        </div>
        <div className={'pb-10'}>
          <h2>스마텔 관리자 홈페이지</h2>
          <p>2023. 10 - 2024. 01</p>
        </div>

        <div className={'pb-10'}>
          <h2>flutter 기반 서비스앱</h2>
          <p>2023. 10 - 2024. 01</p>
        </div>

        <div className={'pb-10'}>
          <h2>회원 관리 서비스</h2>
          <p>2023. 10 - 2024. 01</p>
        </div>

        <div className={'pb-10'}>
          <h2>LG U+셀프 개통 서비스</h2>
          <p>2023. 10 - 2024. 01</p>
        </div>

        <div className={'pb-10'}>
          <h2>LG U+바로 배송 서비스</h2>
          <p>2023. 10 - 2024. 01</p>
        </div>

        <div>
          <h2>스마텔 가입 신청서</h2>
          <p>2023. 04 - 2024. 06</p>
          <h3 className={'text-[20px]'}>Description.</h3>
          <p>외주업체를 통해 제작된 알뜰폰 요금제 신청서 migration 작업 진행</p>
          <h3 className={'text-[20px]'}>What did I do.</h3>
          <li>vue.js 를 횔용한 이니시스 본인인증 모듈 구현</li>
          <li>oracle DB {'->'} mysql DB 이전</li>
          <li>spring boot를 활용한 CRUD 기반 서비스 제작</li>
          <h3 className={'text-[20px]'}>Tech Stack.</h3>
          <p className={'text-[18px]'}>vue.js, spring boot, mysql, aws</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
