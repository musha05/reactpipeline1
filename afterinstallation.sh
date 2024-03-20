EC2_INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
AZ=$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone)
sed -i "s|application was deployed on|application was deployed on $EC2_INSTANCE_ID in $AZ|" /var/www/html/index.html
chmod 664 /var/www/html/index.html
