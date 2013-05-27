# 現在のパスを格納
path=`pwd`

# !!!初回
# npm install

# 日付のディレクトリを作成
# mkdir $path/import
# scp 4dadmin@ec2-175-41-196-217.ap-northeast-1.compute.amazonaws.com:/var/www/rails/CREATIVESURVEY/current/log/*.gz $path/import/
# date=`find $path $path | grep production\.log-[0-9]{8}`
# dateName=`ls $date | cut -d " " -f 11-11`
# dirname=`echo $pram | sed 's/\.[^.]*$//' | sed 's/production.log-//g'`

# scpしたファイルの日付と整合性が合わなかった↓
dirname=`env TZ=JST+15 date +%Y%m%d`

mkdir $path/$dirname
mkdir $path/$dirname | mkdir $path/$dirname/staging | mkdir $path/$dirname/production
mkdir $path/$dirname/production/01 | mkdir $path/$dirname/production/02 | mkdir $path/$dirname/production/03
mkdir $path/$dirname/production/export | mkdir $path/$dirname/staging/export

# staging
scp 4dadmin@54.249.225.121:/var/www/rails/CREATIVESURVEY/current/log/*.gz $path/$dirname/staging
scp 4dadmin@54.249.225.121:/var/log/nginx/*.gz $path/$dirname/staging

# production
scp 4dadmin@ec2-175-41-196-217.ap-northeast-1.compute.amazonaws.com:/var/www/rails/CREATIVESURVEY/current/log/*.gz $path/$dirname/production/01
scp 4dadmin@ec2-175-41-196-217.ap-northeast-1.compute.amazonaws.com:/var/log/nginx/*.gz $path/$dirname/production/01
scp 4dadmin@ec2-54-249-131-154.ap-northeast-1.compute.amazonaws.com:/var/www/rails/CREATIVESURVEY/current/log/*.gz $path/$dirname/production/02
scp 4dadmin@ec2-54-249-131-154.ap-northeast-1.compute.amazonaws.com:/var/log/nginx/*.gz $path/$dirname/production/02
scp 4dadmin@ec2-54-248-46-144.ap-northeast-1.compute.amazonaws.com:/var/www/rails/CREATIVESURVEY/current/log/*.gz $path/$dirname/production/03
scp 4dadmin@ec2-54-248-46-144.ap-northeast-1.compute.amazonaws.com:/var/log/nginx/*.gz $path/$dirname/production/03

# 解凍
find . -name '*.gz' -print | xargs gzip -d
cat  $path/$dirname/production/0*/* >> $path/$dirname/production/production.log-$dirname
cd $dirname

#node.jsを実行
node $path/regexp.js

# レポートをコピー
mkdir $path/-REPORTS
mkdir $path/-REPORTS/$dirname
mkdir $path/-REPORTS/$dirname/production
mkdir $path/-REPORTS/$dirname/staging
cp -a $path/$dirname/production/export $path/-REPORTS/$dirname/production/
cp -a $path/$dirname/staging/export $path/-REPORTS/$dirname/staging/


