USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnEmptyContainerOutGatePass_History]    Script Date: 01/08/2024 6:04:44 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyContainerOutGatePass_History](
	[trnEmptyContainerOutGatePass_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnEmptyContainerOutGatePassID] [bigint]  NOT NULL,
	[TransactionType] [varchar](50) NULL,
	[trnEmptyContainerOutGatePassPrefix] [varchar](20) NULL,
	[trnEmptyContainerOutGatePassNo] [varchar](255) NULL,
	[TruckNo] [varchar](255) NULL,
	[TruckID] [int] NULL,
	[VehicleType] [varchar](255) NULL,
	[Transporter] [varchar](255) NULL,
	[TransporterID] [int] NULL,
	[DriverID] [int] NULL,
	[Driver] [varchar](255) NULL,
	[LicenceNo] [varchar](255) NULL,
	[MobileNo] [varchar](255) NULL,
	[Address] [varchar](255) NULL,
	[IsFinished] [bit] NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePass_History] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePass_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePass_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePass_History] ADD  DEFAULT ((0)) FOR [IsApproved]
GO

