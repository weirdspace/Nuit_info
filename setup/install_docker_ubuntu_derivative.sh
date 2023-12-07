#!/bin/bash


# removal
echo "\nsudo apt-get install gnome-terminal\n"
sudo apt-get install gnome-terminal
echo "\nsudo apt-get remove docker-desktop\n"
sudo apt-get remove docker-desktop
echo "\nsudo rm -rf ~/.docker/desktop\n"
sudo rm -rf ~/.docker/desktop
echo "\nsudo rm -rf /usr/local/bin/com.docker.cli\n"
sudo rm -rf /usr/local/bin/com.docker.cli
echo "\nsudo apt-get purge docker-desktop\n"
sudo apt-get purge docker-desktop

#fresh install
# Add Docker's official GPG key:
echo "\nsudo apt-get update\n"
sudo apt-get update
echo "\nsudo apt-get install ca-certificates curl gnupg\n"
sudo apt-get install ca-certificates curl gnupg
echo "\nsudo install -m 0755 -d /etc/apt/keyrings\n"
sudo install -m 0755 -d /etc/apt/keyrings
echo "\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "\nsudo chmod a+r /etc/apt/keyrings/docker.gpg\n"
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$UBUNTU_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
echo "\nsudo apt-get update\n"
sudo apt-get update

echo "\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "\nsudo docker run hello-world\n"
sudo docker run hello-world

echo "\nsudo apt-get install ./docker-desktop-4.26.0-amd64.deb\n"
sudo apt-get install ./docker-desktop-4.26.0-amd64.deb

echo "\nsystemctl --user start docker-desktop\n"
systemctl --user start docker-desktop
