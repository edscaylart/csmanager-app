import dmg from '@/assets/cs-go/competitive/dmg.png';
import expired from '@/assets/cs-go/competitive/expired.png';
import ge from '@/assets/cs-go/competitive/ge.png';
import gn1 from '@/assets/cs-go/competitive/gn1.png';
import gn2 from '@/assets/cs-go/competitive/gn2.png';
import gn3 from '@/assets/cs-go/competitive/gn3.png';
import gnm from '@/assets/cs-go/competitive/gnm.png';
import le from '@/assets/cs-go/competitive/le.png';
import lem from '@/assets/cs-go/competitive/lem.png';
import mg1 from '@/assets/cs-go/competitive/mg1.png';
import mg2 from '@/assets/cs-go/competitive/mg2.png';
import mge from '@/assets/cs-go/competitive/mge.png';
import s1 from '@/assets/cs-go/competitive/s1.png';
import s2 from '@/assets/cs-go/competitive/s2.png';
import s3 from '@/assets/cs-go/competitive/s3.png';
import s4 from '@/assets/cs-go/competitive/s4.png';
import se from '@/assets/cs-go/competitive/se.png';
import sem from '@/assets/cs-go/competitive/sem.png';
import smfc from '@/assets/cs-go/competitive/smfc.png';
import unknown from '@/assets/cs-go/competitive/unknown.png';

export const RANK_IMAGE = {
  dmg,
  expired,
  ge,
  gn1,
  gn2,
  gn3,
  gnm,
  le,
  lem,
  mg1,
  mg2,
  mge,
  s1,
  s2,
  s3,
  s4,
  se,
  sem,
  smfc,
  unknown,
};

export type PatentImage = keyof typeof RANK_IMAGE;
