pipeline {
    agent any

    environment {
        // Define SonarQube server name configured in Jenkins (go to Manage Jenkins -> Configure System -> SonarQube Servers)
        SONARQUBE_SERVER = 'sonar'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from your source control (e.g., Git)
                git url: 'https://github.com/parthmadhvani/jenkins.git', branch: 'main'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run SonarQube analysis
                    withSonarQubeEnv(SONARQUBE_SERVER) {
                        // Use 'sonar-scanner.bat' for Windows and properly format the command
                        bat '''
                            sonar-scanner.bat \
                            -Dsonar.projectKey=sonar \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9000 \
                            -Dsonar.token=sqp_a76ce9780f487c48f3fcfda1b50ede165c11d64f
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build succeeded! SonarQube analysis completed successfully.'
        }
        failure {
            echo 'Build failed! Please check the logs and the SonarQube analysis results for more details.'
        }
    }
}
