node{
  def app

  stage('Clone repository') {
    checkout scm
    sh 'echo "Clone Done"'
  }

  stage('Build images') {
    app = docker.build("benjaminbra/gta-ynov-vue")
    sh 'echo "Latest image builded"'
  }

  stage('Push image') {
    docker.withRegistry('https://registry.gitlab.com/', 'gitlab-credentials') {
      app.push("build-${env.BUILD_NUMBER}-${env.TYPE}")
      app.push("latest")
    }
    sh 'echo "Image Well Pushed"'
  }
}
