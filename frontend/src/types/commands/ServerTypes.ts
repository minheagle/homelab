export type Server = {
  id: string | number;
  group?: string;
  name: string;
  type: ServerType;
  host: string;
  port: number;
  user: string;
  password: string;
};

export type ServerFormData = {
  group?: string;
  name: string;
  type: ServerType;
  host: string;
  port: number;
  user: string;
  password: string;
};

export enum ServerType {
  UBUNTU = "ubuntu",
  DEBIAN = "debian",
  CENTOS = "centos",
  FEDORA = "fedora",
  OTHER = "other",
}

export type SSHInfo = {
  host: string;
  port: number;
  user: string;
  password: string;
};

export type Session = {
  id: string | number;
  name: string;
};
