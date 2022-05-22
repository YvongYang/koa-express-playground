pipeline {
    agent any
    stages {
        stage('Build Test') {
            steps {
                sh 'echo "Hello World 11"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}