USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnEmptyContainerGateIn]    Script Date: 01/09/2024 10:51:49 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyContainerGateIn](
	[trnEmptyContainerGateInID] [bigint] IDENTITY(1,1) NOT NULL,
	[EmptyContainerGateInPrefix] [varchar](50) NULL,
	[EmptyContainerGateInNo] [varchar](5) NULL,
	[TrailerNo] [varchar](100) NULL,
	[TrailerID] [bigint] NULL,
	[TransporterName] [varchar](100) NULL,
	[TransporterID] [bigint] NULL,
	[TrailerType] [varchar](100) NULL,
	[LICNo] [varchar](255) NULL,
	[Driver] [varchar](255) NULL,
	[DriverID] [int] NULL,
	[MobileNo] [varchar](255) NULL,
	[Address] [varchar](max) NULL,
	[FRBundlingStatus] [varchar](50) NULL,
	[SameTruckIsUsed] [varchar](50) NULL,
	[TruckWeighmentStatus] [varchar](50) NULL,
	[Remarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[Status] [char](1) NOT NULL,
	[StatusRemarks] [varchar](max) NULL,
	[HoldAgency] [varchar](255) NULL,
	[HoldAgencyID] [int] NULL,
	[IsFinished] [bit] NOT NULL,
	[TransportationType] [varchar](50) NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateIn] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateIn] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateIn] ADD  DEFAULT ('P') FOR [Status]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateIn] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateIn] ADD  DEFAULT ((0)) FOR [IsApproved]
GO


