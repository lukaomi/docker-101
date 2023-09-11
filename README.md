https://www.youtube.com/watch?v=7KVdJ43dQmE
https://learn.microsoft.com/en-us/windows/wsl/install

(Ubuntu 20.04)

________________________________________________
```bash
sudo apt-get update

sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common gnupg

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce

sudo usermod -aG docker `whoami`
```

________________________________________________


Provjerite verziju docker-compose-a i izmjenite po potrebi: https://github.com/docker/compose/releases (Radimo na verziji 1)

```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

________________________________________________

Reboot 

```
docker --version
docker-compose --version 

sudo service docker start
```